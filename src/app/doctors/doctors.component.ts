import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-doctors',
  templateUrl: './doctors.component.html',
  styleUrls: ['./doctors.component.css']
})
export class DoctorsComponent implements OnInit {
   doctors:Array<object>
  constructor() {
  this.doctors=[
      {name:"Dhiman Hazarika",experience:"24",study:"MBBS, MS",language:"English",hospital:"Narayana Superspeciality Hospital, Guwahati",img:"https://www.carehospitals.com/wp-content/uploads/2019/03/dr-sadath-ali-1.png",speciality:"ANAESTHESIA"},
      {name:" Dr. Jitendra Ladhania",experience:"26",study:"MBBS, MS",language:"English",hospital:"Narayana Multispeciality Hospital, Barasat",img:"https://www.carehospitals.com/wp-content/uploads/2019/03/dr-sai-prakash-1.png",speciality:"ANAESTHESIA"},
      {name:"Simantika Ghosh",experience:"26",study:"MBBS, DNB",language:"English",hospital:"Narayana Superspeciality Hospital, Howrah",img:"https://www.carehospitals.com/wp-content/uploads/2018/12/Dr.-Sunil-Babu-Pulla-1.png",speciality:"ANAESTHESIA"},
      {name:"Dr. Albinus Lakra",experience:"27",study:"MBBS, MS",language:"English",hospital:"Brahmananda Narayana Multispeciality Hospital, Jamshedpur",img:"https://www.carehospitals.com/wp-content/uploads/2018/12/Dr-C-R-Vijaya-Mohan-1.png",speciality:"GENERAL SURGERY"},
      {name:"Dr. Gaurav Kumar",experience:"24",study:"MBBS, DNB, MNAMS",language:"English",hospital:"Narayana Superspeciality Hospital, Howrah",img:"https://www.carehospitals.com/wp-content/uploads/2020/07/DR.-GAURAV-AGARWAL.png",speciality:"GENERAL SURGERY"},
      {name:"Dr. Debdoot Soren",experience:"25",study:"MBBS, MS",language:"English",hospital:"Brahmananda Narayana Multispeciality Hospital, Jamshedpur",img:"https://www.carehospitals.com/wp-content/uploads/2019/01/ranadhir-mitra-1.png",speciality:"GENERAL SURGERY"},
      {name:"Dr. Akula Srinivas Rao",experience:"25",study:"MDS",language:"English",hospital:"CARE Super Specialty Hospital & Transplant Centre – Banjara Hill, Jamshedpur",img:"https://www.carehospitals.com/wp-content/uploads/2018/12/Dr.-Akula-Srinivasa-Rao.png",speciality:"DENTISTRY"},
      {name:"Dr. Rashmi Kandlikar",experience:"24",study:"BDS, FCIP, FRSH",language:"English",hospital:"CARE Super Specialty Hospital & Transplant Centre – Banjara Hills",img:"https://www.carehospitals.com/wp-content/uploads/2018/12/Dr.-Reshmi.png",speciality:"DENTISTRY"},
      {name:"Dr. Duddu Mahesh Kumar",experience:"23",study:"BDS, MDS",language:"English",hospital:"CARE Super Specialty Hospital – Hi-tech City",img:"https://www.carehospitals.com/wp-content/uploads/2019/01/dr-duddu-mahesh-kumar.png",speciality:"DENTISTRY"},
      {name:"Dr. Srinivasulu Dudyala",experience:"23",study:"MD (General Medicine), DM (Gastroenterology)",language:"English",hospital:"",img:"https://www.carehospitals.com/wp-content/uploads/2019/01/dr-d-srinivasulu.png",speciality:"GASTROENTEROLOGY"},
      {name:" Dr. M. Subba Lakshmi",experience:"23",study:"MBBS, MD (General Medicine), DM (Gastroenterology)",language:"English",hospital:"CARE Super Specialty Hospital – Hi-tech City",img:"https://www.carehospitals.com/wp-content/uploads/2019/05/Dr.-Asha-Subba-Lakshmi-01.png",speciality:"GASTROENTEROLOGY"},
      {name:" Dr. Swathi G",experience:"24",study:"MD (General Medicine), DM (Gastroenterology)",language:"English",hospital:"CARE Super Specialty Hospital – Hi-tech City",img:"https://www.carehospitals.com/wp-content/uploads/2020/08/Dr.-Swathi-G.png",speciality:"GASTROENTEROLOGY"},
      {name:"Dr. Pushkal Dwivedi",experience:"24",study:"MD, FMO, ESMO (Medical Oncology)",language:"English",hospital:"Ramkrishna CARE Super Specialty Hospital",img:"https://www.carehospitals.com/wp-content/uploads/2020/08/Dr.-Pushkal-Dwivedi.png",speciality:"ONCOLOGY"},
      {name:"Dr. Sainath Bhethanabhotla",experience:"24",study:"MD (AIIMS), DM (AIIMS)",language:"English",hospital:"CARE Super Specialty OPD Centre – Banjara Hills",img:"https://www.carehospitals.com/wp-content/uploads/2020/07/sainath.png",speciality:"ONCOLOGY"},
      {name:"Dr. Amit Kumar Jaiswal",experience:"24",study:"MBBS, MS, DNB (Surgical Oncology)",language:"English",hospital:"CARE Super Specialty Hospital – Nagpur",img:"https://www.carehospitals.com/wp-content/uploads/2019/01/Dr-Amit-Kumar-Jaiswal-1.png",speciality:"ONCOLOGY"},   
      {name:" Dr. R Revathi",experience:"24",study:"MBBS, MS, MCh",language:"English",hospital:"CARE Super Specialty OPD Centre – Banjara Hills",img:"https://www.carehospitals.com/wp-content/uploads/2018/12/dr-revathi.png",speciality:"UROLOGY"},
      {name:"Dr. Murali Mohan",experience:"24",study:"MS, MCh (Urology)",language:"English",hospital:"CARE Super Specialty Hospital –  Hi-tech Cit",img:"https://www.carehospitals.com/wp-content/uploads/2018/12/dr-murali-mohan.png",speciality:"UROLOGY"},
      {name:"Dr. Sivaraj Manoharan",experience:"24",study:"MBBS, MS, MCh ",language:"English",hospital:"CARE Super Specialty Hospital –  Nagpur",img:"https://www.carehospitals.com/wp-content/uploads/2018/12/Dr.-Sivaraj-Mahoharan.png",speciality:"UROLOGY"},
      {name:"Dr. Ashwinikumar Khandekar",experience:"24",study:" MBBS, MD (Med), DNB",language:"English",hospital:"CARE Super Specialty Hospital –  Nagpur",img:"https://www.carehospitals.com/wp-content/uploads/2019/01/dr-ashwin-kumar-1.png",speciality:"NEPHROLOGY"},
      {name:"Dr. Syeda Shaista M Hussaini",experience:"24",study:"MD, DNB",language:"English",hospital:" CARE Super Specialty Hospital",img:"https://www.carehospitals.com/wp-content/uploads/2019/01/dr-shraista-hussaini.png",speciality:"NEPHROLOGY"},
      {name:"Dr. Rekha",experience:"24",study:"MBBS, MD (Med, Nephrology)",language:"English",hospital:" CARE Super Specialty Hospital –  Hi-tech City",img:"https://www.carehospitals.com/wp-content/uploads/2019/01/dr-rekha.png",speciality:"NEPHROLOGY"},   
      {name:"Dr. Srinivas Boga",experience:"25",study:"MBBS (Gold Medalist), MS (Ortho-Osm)",language:"English",hospital:"CARE Super Specialty Hospital –  Hi-tech City",img:"https://www.carehospitals.com/wp-content/uploads/2019/03/dr-sreenivas-boga-1.png",speciality:"ORTHOPEDICS"},
      {name:"Dr. Manoj Kumar Gudluru",experience:"24",study:"MBBS, MS, MCh Ortho",language:"English",hospital:"CARE Super Specialty Hospital –  Nampally",img:"https://www.carehospitals.com/wp-content/uploads/2018/12/Dr.-Manoj_Ortho.png",speciality:"ORTHOPEDICS"},
      {name:"Dr. B N Prasad",experience:"25",study:"MBBS, MS",language:"English",hospital:"CARE Super Specialty Hospital & Transplant Centre – Banjara Hills",img:"https://www.carehospitals.com/wp-content/uploads/2018/12/Dr.-BN-Prasad.png",speciality:"ORTHOPEDICS"},
      {name:"Dr. P L Chandravathi",experience:"28",study:"MBBS, MD (DVL), FISD, FAAD",language:"English",hospital:"CARE Super Specialty OPD Centre – Banjara Hills",img:"https://www.carehospitals.com/wp-content/uploads/2018/12/Dr.-Chandravathi.png",speciality:"DERMATOLOGY"},
      {name:"Dr. Bala Naga Sindhura Kambhampati",experience:"22",study:"MBBS, MD (DVL)",language:"English",hospital:"CARE Super Specialty Hospital – Hi-tech City",img:"https://www.carehospitals.com/wp-content/uploads/2018/12/dr-sindhura.png",speciality:"DERMATOLOGY"},
      {name:"Dr. Swapna Priya",experience:"24",study:"MBBS, MD (DVL)",language:"English",hospital:"CARE Super Specialty Hospital & Transplant Centre – Banjara Hills",img:"https://www.carehospitals.com/wp-content/uploads/2018/12/Dr.-Swapna-Priya.png",speciality:"DERMATOLOGY"},
      {name:"Dr. Kishore L T",experience:"24",study:"MD, DNB",language:"English",hospital:"CARE Super Specialty Hospital – Hi-tech City",img:"https://www.carehospitals.com/wp-content/uploads/2019/01/dr-kishore-LT.png",speciality:"RADIOLOGY"},
      {name:"Dr. Vishnu Vardhan",experience:"24",study:"MBBS, DNB (Radiology)",language:"English",hospital:"CARE Super Specialty Hospital – Hi-tech City",img:"https://www.carehospitals.com/wp-content/uploads/2019/01/dr-vishnu-vardhan.png",speciality:"RADIOLOGY"},
      {name:"Dr Vikram K",experience:"24",study:"MBBS, MD (Radio Diagnosis)",language:"English",hospital:"CARE Super Specialty Hospital – Nampally",img:"https://www.carehospitals.com/wp-content/uploads/2019/01/dr-vikram.png",speciality:"RADIOLOGY"},
      {name:"Dr. Sasidhar Reddy",experience:"24",study:"DNB - Plastic Surgery",language:"English",hospital:"CARE Super Specialty OPD Centre – Banjara Hills",img:"https://www.carehospitals.com/wp-content/uploads/2020/07/Dr-Sasidhar-Reddy.png",speciality:"PLASTIC SURGERY"},
      {name:"Dr. Ravi Chander Rao",experience:"24",study:"MBBS, MS, MCh",language:"English",hospital:"CARE Super Specialty OPD Centre – Banjara Hills",img:"https://www.carehospitals.com/wp-content/uploads/2020/08/Dr.-Ravincher.png",speciality:"PLASTIC SURGERY"},
      {name:"Dr. Deepthi",experience:"24",study:"MBBS, MS, MCh",language:"English",hospital:"CARE Super Specialty OPD Centre – Banjara Hills",img:"https://www.carehospitals.com/wp-content/uploads/2020/07/deepthi.png",speciality:"PLASTIC SURGERY"},
    ]
  }

  ngOnInit(): void {
  }

}
