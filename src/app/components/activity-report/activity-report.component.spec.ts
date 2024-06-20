import { ComponentFixture, TestBed } from "@angular/core/testing";
import { ActivityReportComponent } from "./activity-report.component";

describe('ActivityReportComponent', () => {
  let component: ActivityReportComponent;
  let fixture: ComponentFixture<ActivityReportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ActivityReportComponent ],
      // Mock any necessary providers or modules here
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ActivityReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize globalThis.state and globalThis.gstc on ngOnInit', () => {
    spyOnProperty(globalThis, 'state').and.returnValue(null); // Mock globalThis.state
    spyOnProperty(globalThis, 'gstc').and.returnValue(null); // Mock globalThis.gstc

    component.ngOnInit();

    expect(globalThis.state).toBeDefined();
    expect(globalThis.gstc).toBeDefined();
  });
});
