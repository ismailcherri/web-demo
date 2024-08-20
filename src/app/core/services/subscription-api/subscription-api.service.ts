import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { ApiSuccess } from '@app/shared/models';
import { environment } from '@env/environment';

const SUBSCRIPTION_API_PATH = `${environment.apiEndpointTemplate}/subscription`
  .replace('{{api-gateway}}', environment.subscriptionApiGateway)
  .replace('{{aws-region}}', environment.awsRegion);

@Injectable({
  providedIn: 'root',
})
export class SubscriptionApiService {
  constructor(private httpClient: HttpClient) {}

  getSubscriptionApiPath(): string {
    return SUBSCRIPTION_API_PATH;
  }

  subscribeEmail(emailId: string): Observable<ApiSuccess> {
    return this.httpClient.post<ApiSuccess>(`${SUBSCRIPTION_API_PATH}/subscribe`, { emailId });
  }
}
