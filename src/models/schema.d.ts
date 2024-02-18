import { Schema } from '@aws-amplify/datastore';

export declare const schema: Schema;

export interface Course {
    id: string;
    title: string;
    description: string;
    price?: number;
    createdAt?: string;
    updatedAt?: string;
}

export interface CoursesList {
    courses: Course[];
}