import { TopicCategoryItem } from "./topic-item.model";

export interface TekByteItem {
  title: string;
  tekByteId: string;
  topicCode: string;
  summary: string;
  category: TopicCategoryItem
  status: string;
  imageUrl: string;
  aliases: string[];
  description: string;
  didYouKnow: string;
  wayForward: string;
  goldenCircle: GoldenCircleItem;
  keyConcepts: KeyConceptItem;
  applications: ApplicationItem;
  currentTrends: CurrentTrendItem;
  challenges: ChallengeItem;
  timeline: TimelineItem;
  recommendations: number;
  prizingModel: string;
  isRecommended?: boolean;
}
export interface GoldenCircleItem {
  why: string;
  how: string;
  what: string;
}
export interface KeyConceptItem {
  title: string;
  summary: string;
  imageURL: string;
}

export interface ApplicationItem {
  title: string;
  description: string;
}
export interface ApplicationsItem {
  title: string;
  description: string;
}
export interface CurrentTrendItem {
  title: string;
  description: string;
}

export interface ChallengeItem {
  title: string;
  description: string;
}

export interface TimelineItem {
  title: string;
  description: string;
}

export interface TimelineItem {
  title: string;
  description: string;
}