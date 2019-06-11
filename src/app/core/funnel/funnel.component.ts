import { Component, OnInit } from '@angular/core';
import { ShairedService } from 'src/app/shared/services/shaired.service';
import { element } from 'protractor';



@Component({
  selector: 'app-funnel',
  templateUrl: './funnel.component.html',
  styleUrls: ['./funnel.component.css']
})
export class FunnelComponent implements OnInit {

  leadIn = 0;
  ContactMade = 0;
  NeedsDefined = 0;
  ProposalMade = 0;
  NegotiationStarted = 0;
  Wonn = 0;
  constructor(private shairedService: ShairedService) { }

  ngOnInit() {
    this.shairedService.$saleDetailsList.subscribe(data  => {
      const saleDetailsList = this.shairedService.saleDetailsList;
      this.leadIn = 0;
      this.ContactMade = 0;
      this.NeedsDefined = 0;
      this.ProposalMade = 0;
      this.NegotiationStarted = 0;
      this.Wonn = 0;
      saleDetailsList.forEach(element => {
        if (element.EngagementStatus === 'Lead in') {
          this.leadIn++;
        } else if (element.EngagementStatus === 'Contact made') {
          this.ContactMade++;
        } else if (element.EngagementStatus === 'Needs defined') {
          this.NeedsDefined++;
        } else if (element.EngagementStatus === 'Proposal Made') {
          this.ProposalMade++;
        } else if (element.EngagementStatus === 'Negotiation started') {
          this.NegotiationStarted++;
        } else if (element.EngagementStatus === 'Won') {
          this.Wonn++;
        }
      });
    }
      );
  }

}
