export class SaleDetails {
    constructor(
        public id?: string,
        public SalesRep?: string,
        public meetingDate?: string,
        public Client?: string,
        public POC?: string,
        public Title?: string,
        public Vertical?: string,
        public MeetingLocation?: string,
        public POI?: string,
        public OutCome_Remarks?: string,
        public EngagementStatus?: string,
        public callsTried?: number,
        public callsRecived?: number,
        public baseRevenue?: number,
        public incrementedRevenue?: number,
        public NewMMR?: number,
        public NewLogo?: number


      ) {}
}
