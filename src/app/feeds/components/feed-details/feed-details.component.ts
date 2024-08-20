import { Clipboard } from '@angular/cdk/clipboard';
import {
  Component,
  OnInit,
  OnDestroy,
  AfterViewInit,
  Renderer2,
  ViewChild,
  ElementRef,
  ChangeDetectorRef,
} from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { AppSpinnerService, FeedApiService, EventChannelService } from '@app/core';
import { HelperService } from '@app/core/services/common/helper.service';
import { IFeedItem, NavTab } from '@app/shared/models';
import { ChannelEvent } from '@app/shared/models/channel-item.model';
import { MessageService } from 'primeng/api';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-feed-details',
  templateUrl: './feed-details.component.html',
  styleUrls: ['./feed-details.component.scss'],
  providers: [MessageService],
})
export class FeedDetailsComponent implements OnInit, OnDestroy, AfterViewInit {
  resourceUrl: SafeResourceUrl;
  feedId: string;
  capsuleURL: string;
  isMobileResolution: boolean;
  capsuleDetail: IFeedItem;
  subrscription: Subscription[] = [];
  @ViewChild('capsuleFrame') capsuleFrame: ElementRef;
  isDataAvailable: boolean;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private sanitizer: DomSanitizer,
    private eventChannel: EventChannelService,
    private spinner: AppSpinnerService,
    private messageService: MessageService,
    private feedApi: FeedApiService,
    private helperService: HelperService,
    private clipboard: Clipboard,
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    this.spinner.show();
    this.onResize();
    this.feedId = this.route.snapshot.paramMap.get('id');
    if (sessionStorage.getItem('com.tekcapzule.resourceURL')) {
      this.capsuleURL =
        sessionStorage.getItem('com.tekcapzule.resourceURL') || 'https://tekcapzule.blog';
      this.isDataAvailable = true;
      this.loadCapsule();
    } else {
      this.fetchCapsuleDetails();
    }
  }

  onResize() {
    const sub = this.helperService.onResizeChange$().subscribe(isMobileResolution => {
      this.isMobileResolution = isMobileResolution;
    });
    this.subrscription.push(sub);
  }

  fetchCapsuleDetails() {
    const sub = this.feedApi.getCapsuleById(this.feedId).subscribe(data => {
      this.capsuleDetail = data;
      this.capsuleURL = this.capsuleDetail.resourceUrl || 'https://tekcapzule.blog';
      this.loadCapsule();
    });
    this.subrscription.push(sub);
  }

  loadCapsule() {
    this.resourceUrl = this.sanitizer.bypassSecurityTrustResourceUrl(this.capsuleURL);
    this.cdr.detectChanges();
    const detailFrame = this.capsuleFrame.nativeElement as HTMLIFrameElement;
    detailFrame.addEventListener('load', this.onIframeLoaded.bind(this));
  }

  onIframeLoaded() {
    this.spinner.hide();
  }

  ngOnDestroy(): void {
    this.resourceUrl = '';
    this.subrscription.forEach(sub => sub.unsubscribe());
    const detailFrame = this.capsuleFrame.nativeElement as HTMLIFrameElement;
    detailFrame.removeEventListener('load', this.onIframeLoaded.bind(this));
  }

  ngAfterViewInit(): void {
    setTimeout(() => {
      this.eventChannel.publish({ event: ChannelEvent.HideCapsuleNavTabs });
    });
  }

  getNavBreadcrumbs(): NavTab | any[] {
    const crumbs: NavTab | any[] = [];
    const queryTitle = sessionStorage.getItem('com.tekcapzule.title') || this.capsuleDetail.title;
    const selectedMenu = this.helperService.findSelectedMenu(
      sessionStorage.getItem('com.tekcapzule.pageURL') || this.router.url
    );
    crumbs.push(selectedMenu.selectedMenuItem);
    if (selectedMenu.selectedChildMenuItem) {
      crumbs.push(selectedMenu.selectedChildMenuItem);
    }
    if (queryTitle) {
      crumbs.push({ displayName: queryTitle });
    }
    return crumbs;
  }

  navigateToCapsulePage(url: string): void {
    this.router.navigate([url]);
  }

  onIFrameClose(): void {
    this.resourceUrl = '';
    this.router.navigate([sessionStorage.getItem('com.tekcapzule.pageURL') || '/']);
  }

  onRecommendClick() {
    const sub = this.feedApi.updateFeedRecommendCount(this.feedId).subscribe(data => {
      this.messageService.add({
        key: 'tc',
        severity: 'success',
        detail: 'Thank you for the recommendation!',
      });
    });
    this.subrscription.push(sub);
  }

  onShareClick() {
    const shareableUrl = new URL(window.location.href);
    this.clipboard.copy(shareableUrl.toString());

    this.messageService.add({
      key: 'tc',
      // severity: 'success',
      summary: '',
      detail: 'Link copied. You can share it now.',
    });
  }
}
