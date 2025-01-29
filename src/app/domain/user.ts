import { Profile } from './profile';
import { Technology } from './technology';

export class User {
    username?: string;
    age?: number;
    gender?: string;
    isMarried?: any[] = [];
    isTCAccepted?: any[] = [];
    profile?: Profile;
    technologies?: Technology[];
} 