export interface Project {
    id: number;
    name: string;
    attendees?: string;
    role: string;
    image?: string;
    description?: string;
    clickOnCard?: string;
    LinkToLinkedIn?: string;
    linkToGitHub?: string;
    bulletPoints?: string[];
    videos?: { url: string, title: string }[];
}