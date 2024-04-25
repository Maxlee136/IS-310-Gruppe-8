// types/Member.ts
export interface Member {
    id: number;
    name: string;
    role: string;
    image?: string;  // Optional, add this if you're using images
    description?: string;  // Optional, for additional text
}
