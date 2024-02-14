import { Component, OnInit, ViewChild } from '@angular/core';
import { CommandModel, EditSettingsModel, IEditCell, GridComponent } from '@syncfusion/ej2-angular-grids';
import { PageSettingsModel, SelectionSettingsModel } from '@syncfusion/ej2-angular-grids';
import { TextWrapSettingsModel } from '@syncfusion/ej2-angular-grids';
import { DropDownList } from '@syncfusion/ej2-dropdowns';
import { Query, DataManager } from '@syncfusion/ej2-data';
import { WarehouseRow } from '../model/warehouse.model';
import { quarantine } from '../datasource';
import { loadCldr, L10n } from '@syncfusion/ej2-base';

declare var require: any;
loadCldr(
  require("cldr-data/main/it/numbers.json"),
  require("cldr-data/main/it/ca-gregorian.json"),
  require("cldr-data/supplemental/numberingSystems.json"),
  require("cldr-data/main/it/timeZoneNames.json"),
  require('cldr-data/supplemental/weekdata.json') // To load the culture based first day of week
);

@Component({
  selector: 'app-planprogrammer',
  templateUrl: './planprogrammer.component.html'
})
export class PlanProgrammerComponent implements OnInit {

  @ViewChild('grid') public grid: GridComponent;
  public data: WarehouseRow[];
  //public wrapSettings: TextWrapSettingsModel;
  public selectionOptions: SelectionSettingsModel;
  public pageSettings: PageSettingsModel;
  public editSettings: EditSettingsModel;
  public commands: CommandModel[];
  public boolParams: IEditCell;
  public dpParams: IEditCell;
  public lineParams: IEditCell;
  wait: boolean = false;

  public lines: object[] = [
    { lineName: 'Line 1', lineId: '1' },
    { lineName: 'Line 2', lineId: '2' },
    { lineName: 'Line 3', lineId: '3' }
];

  async ngOnInit(): Promise<void> 
  {

    L10n.load({
      it: {
      datepicker: {
    placeholder: "Inserire una data",
    today:"Oggi"
    }
      }
    });  
  
  
    //setCulture('ar');

    //this.wrapSettings = { wrapMode: 'Content' };
    this.wait=true;
    this.pageSettings = { pageSize: 100 };
    this.editSettings = { allowEditing: true, allowDeleting: true };
    this.commands = [{ type: 'Delete', buttonOption: { cssClass: 'e-flat', iconCss: 'e-delete e-icons' } }];
    this.boolParams = { params: { checked: false } };
    this.dpParams = { params: { value: new Date() } };        
    
    this.lineParams = 
      {
        params: 
        {
          allowFiltering: true,
          dataSource: new DataManager(this.lines),
          fields: { text: 'lineName', value: 'lineId' },
          query: new Query(),
          actionComplete: () => false      
        }
      };   
       
      let response = await fetch("http://localhost:47503/api/Quarantine/site/36" );
      if (response.status != 200)
      {
        this.wait=false;
        let json = await response.json()
        alert(json)
      }
      else
      {
        let json = await response.json()
        this.data=json;
        this.wait=false;
        //this.grid.dataSource=json;
        console.log(this.data);
      }
    }
  onActionFailure(e: Error): void {
    alert('Server exception: 404 Not found');
  }
  dataBound() {
    this.grid.autoFitColumns();
  }

}