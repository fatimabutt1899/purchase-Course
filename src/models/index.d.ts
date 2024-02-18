import { ModelInit, MutableModel, __modelMeta__, ManagedIdentifier } from "@aws-amplify/datastore";
// @ts-ignore
import { LazyLoading, LazyLoadingDisabled } from "@aws-amplify/datastore";





type EagerCourses = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Courses, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly title: string;
  readonly price?: number | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyCourses = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Courses, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly title: string;
  readonly price?: number | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Courses = LazyLoading extends LazyLoadingDisabled ? EagerCourses : LazyCourses

export declare const Courses: (new (init: ModelInit<Courses>) => Courses) & {
  copyOf(source: Courses, mutator: (draft: MutableModel<Courses>) => MutableModel<Courses> | void): Courses;
}