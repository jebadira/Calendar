import { Version } from '@microsoft/sp-core-library';
import { BaseClientSideWebPart, IPropertyPaneConfiguration } from '@microsoft/sp-webpart-base';
import { ICustomCalendarWebPartWebPartProps } from './ICustomCalendarWebPartWebPartProps';
export default class CustomCalendarWebPartWebPart extends BaseClientSideWebPart<ICustomCalendarWebPartWebPartProps> {
    render(): void;
    protected readonly dataVersion: Version;
    protected getPropertyPaneConfiguration(): IPropertyPaneConfiguration;
}
