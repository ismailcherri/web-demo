import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ApiSuccess } from '@app/shared/models';
import { IResearchPaperDetail } from '@app/shared/models/research-item.model';

import { environment } from '@env/environment';
import { Observable } from 'rxjs';

const RESEARCH_API_PATH = `${environment.apiEndpointTemplate}/research-paper`
  .replace('{{api-gateway}}', environment.researchPaperApiGateway)
  .replace('{{aws-region}}', environment.awsRegion);

const RESEARCH_GETALL_CACHE_KEY = 'com.tekcapzule.research.allresearch';

@Injectable({
  providedIn: 'root',
})
export class ResearchApiService {
  constructor(private httpClient: HttpClient) {}

  getAllResearchPaper(): Observable<IResearchPaperDetail[]> {
    return this.httpClient.post<IResearchPaperDetail[]>(
      `${RESEARCH_API_PATH}/getAll`,
      {},
      {
        params: {
          cache: 'yes',
          ckey: RESEARCH_GETALL_CACHE_KEY,
        },
      }
    );
  }

  getResearch(code: string): Observable<IResearchPaperDetail> {
    return this.httpClient.post<IResearchPaperDetail>(`${RESEARCH_API_PATH}/get`, {code}, {
      params: {
        cache: 'no',
      },
    });
  }

  updateResearchRecommendCount(researchPaperId: string): Observable<ApiSuccess> {
    return this.httpClient
      .post<ApiSuccess>(`${RESEARCH_API_PATH}/recommend`, { researchPaperId });
  }
}
