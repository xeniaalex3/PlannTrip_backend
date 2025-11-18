declare class CreateParticipantNestedDto {
    name?: string;
    email: string;
    is_owner?: boolean;
}
export declare class CreateTripDto {
    user_id: number;
    destination: string;
    starts_at: string;
    ends_at: string;
    is_confirmed?: boolean;
    participants?: CreateParticipantNestedDto[];
}
export {};
