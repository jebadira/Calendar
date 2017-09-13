import * as React from 'react';
import * as ReactDom from 'react-dom';
import { Version } from '@microsoft/sp-core-library';
import {
  BaseClientSideWebPart,
  IPropertyPaneConfiguration,
  PropertyPaneTextField
} from '@microsoft/sp-webpart-base';

import * as strings from 'customCalendarWebPartStrings';
import * as CalendarContainer  from './dist/scripts/c72cc6e78fbc47a8895f1b531093ffac.js';
import { ICustomCalendarWebPartWebPartProps } from './ICustomCalendarWebPartWebPartProps';

export default class CustomCalendarWebPartWebPart extends BaseClientSideWebPart<ICustomCalendarWebPartWebPartProps> {

  public render(): void {
    const element = React.createElement(CalendarContainer.default, {});
    ReactDom.render(element, this.domElement);
  }

  protected get dataVersion(): Version {
    return Version.parse('1.0');
  }

  protected getPropertyPaneConfiguration(): IPropertyPaneConfiguration {
    return {
      pages: [
        {
          header: {
            description: strings.PropertyPaneDescription
          },
          groups: [
            {
              groupName: strings.BasicGroupName,
              groupFields: [
                PropertyPaneTextField('description', {
                  label: strings.DescriptionFieldLabel
                })
              ]
            }
          ]
        }
      ]
    };
  }
}
