import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ApiSuccess } from '@app/shared/models';
import { ICourseDetail } from '@app/shared/models/course-item.model';
import { IInterviewDetail } from '@app/shared/models/interview-item.model';

import { environment } from '@env/environment';
import { Observable } from 'rxjs';

const INTERVIEW_API_PATH = `${environment.apiEndpointTemplate}/interviewprep`
  .replace('{{api-gateway}}', environment.interviewprepApiGateway)
  .replace('{{aws-region}}', environment.awsRegion);

const INTERVIEW_GETALL_CACHE_KEY = 'com.tekcapzule.interview.allinterview';

@Injectable({
  providedIn: 'root',
})
export class InterviewApiService {
  constructor(private httpClient: HttpClient) {}

  getInterviewApiPath(): string {
    return INTERVIEW_API_PATH;
  }

  getAllInterview(): Observable<IInterviewDetail[]> {
    return this.httpClient.post<IInterviewDetail[]>(
      `${INTERVIEW_API_PATH}/getAll`,
      {},
      {
        params: {
          cache: 'yes',
          ckey: INTERVIEW_GETALL_CACHE_KEY,
        },
      }
    );
  }

  updateRecommendCount(interviewId: string): Observable<ApiSuccess> {
    return this.httpClient
      .post<ApiSuccess>(`${INTERVIEW_API_PATH}/recommend`, { interviewId });
  }
}
