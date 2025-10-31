import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import emailjs  from  '@emailjs/browser';
import { PageModalService } from '../../services/page-modal.service';


@Component({
  selector: 'app-contact',
  imports: [ReactiveFormsModule, CommonModule, ReactiveFormsModule, FormsModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {
  dialog = inject(MatDialog);
  pageModalService = inject(PageModalService);
  firstName: string = '';
  referralFirstName: string = '';
  lastName: string = '';
  referralLastName: string = '';
  email: string = '';
  referralEmail: string = '';
  phoneNumber: string = '';
  referralPhoneNumber: string = '';
  enquiry: string = '';
  reason: string = '';
  relation: string = '';
  templateParams: any;

  constructor() {
    emailjs.init('Iv27N9uZkRfx6zEoW');
  }

  sendEmail(data: string) {

    if (data === "Enquiry" || data === "Feedback") {
      this.templateParams = {
        firstName: this.firstName,
        lastName: this.lastName,
        email: this.email,
        phoneNumber: this.phoneNumber,
        reason: this.reason
      };
    } else if (data === "Referral") {
      this.templateParams = {
        referralFirstName: this.referralFirstName,
        firstName: this.firstName,
        referralLastName: this.referralLastName,
        lastName: this.lastName,
        referralEmail: this.referralEmail,
        email: this.email,
        referralPhoneNumber: this.referralPhoneNumber,
        phoneNumber: this.phoneNumber,
        enquiry: this.enquiry,
        reason: this.reason,
        relation: this.relation
      };
    }
    

    emailjs.send('service_mmp9kmv', 'template_ga1o4y4', this.templateParams)
      .then(() => {
        this.submit("SUCCESS");
      }, (error) => {
        console.error('FAILED...', error);
        this.submit("ERROR");
      });
  }


  submit(type: "SUCCESS" | "ERROR") {
    if (type) {
      this.pageModalService.open({
        type: "success",
        heading: "Request sent successfully",
        buttons: { continue: "Done" }
      })
    }
    else {
      this.pageModalService.open({
        type: "error",
        heading: "Something went wrong",
        buttons: { continue: "Try Again" }
      })
    }
  }
}
