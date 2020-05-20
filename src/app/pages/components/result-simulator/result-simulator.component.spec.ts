import { async, ComponentFixture, TestBed } from "@angular/core/testing";
import { ResultSimulatorComponent } from "./result-simulator.component";

describe("ResultSimulatorComponent", () => {
  let component: ResultSimulatorComponent;
  let fixture: ComponentFixture<ResultSimulatorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ResultSimulatorComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResultSimulatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
