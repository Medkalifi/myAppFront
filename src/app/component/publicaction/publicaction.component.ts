import { HttpErrorResponse, HttpEvent, HttpEventType } from '@angular/common/http';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Publication } from 'src/app/model/publication';
import { CrudService } from 'src/app/service/crud-service';
import { FileService } from 'src/app/service/file.service';

import { saveAs } from 'file-saver';
import { map } from 'highcharts';

@Component({
  selector: 'app-publicaction',
  templateUrl: './publicaction.component.html',
  styleUrls: ['./publicaction.component.css']
})
export class PublicactionComponent implements OnInit {
  filenames: string[] = [];
  fileStatus = { status: '', requestType: '', percent: 0 };
  
 
  selectedfile  : any ;

  constructor(private publiService: CrudService,
    private fileService: FileService) { }

  ngOnInit(): void {

    // this.getAllPublications();
  }

  getAllPublications() {
    return this.publiService.findAll('/publications').subscribe(res => {
     // this.publications = res;
      console.log(res);
    }, err => {

    })
  }

  onFileSelected(event :any){
    this.selectedfile = event.target.files;
    console.log(event.target.files);
    
  }
   // define a function to upload files
  onUploadFiles() {
    const formData = new FormData();
    for(let file of this.selectedfile){formData.append('files', file, file.name)}
     
    this.fileService.upload(formData).subscribe(
      event => {
        console.log(event);
        this.resportProgress(event);
      },
      (error: HttpErrorResponse) => {
        console.log(error);
      }
    );
  }

  // define a function to download files
  onDownloadFile(filename: string): void {
    this.fileService.download(filename).subscribe(
     
      
      event => {
        console.log(event);
        this.resportProgress(event);
      },
      (error: HttpErrorResponse) => {
        console.log(error);
      }
    );
  }

  private resportProgress(httpEvent: HttpEvent<string[] | Blob>): void {
    switch(httpEvent.type) {
      case HttpEventType.UploadProgress:
        this.updateStatus(httpEvent.loaded, httpEvent.total!, 'Uploading... ');
        break;
      case HttpEventType.DownloadProgress:
        this.updateStatus(httpEvent.loaded, httpEvent.total!, 'Downloading... ');
        break;
      case HttpEventType.ResponseHeader:
        console.log('Header returned', httpEvent);
        break;
      case HttpEventType.Response:
        if (httpEvent.body instanceof Array) {
          this.fileStatus.status = 'done';
          for (const filename of httpEvent.body) {
            this.filenames.unshift(filename);
          }
        } else {
          saveAs(new File([httpEvent.body!], httpEvent.headers.get('File-Name')!, 
                  {type: `${httpEvent.headers.get('Content-Type')};charset=utf-8`}));
          // saveAs(new Blob([httpEvent.body!], 
          //   { type: `${httpEvent.headers.get('Content-Type')};charset=utf-8`}),
          //    httpEvent.headers.get('File-Name'));
        }
        this.fileStatus.status = 'done';
        break;
        default:
          console.log(httpEvent);
          break;
      
    }
  }

  private updateStatus(loaded: number, total: number, requestType: string): void {
    this.fileStatus.status = 'progress';
    this.fileStatus.requestType = requestType;
    this.fileStatus.percent = Math.round(100 * loaded / total);
  }

}
