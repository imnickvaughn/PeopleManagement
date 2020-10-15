import { Pipe, PipeTransform } from '@angular/core';
import { User } from 'src/app/model/user.model';
@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {
  transform(users: User[], searchText: string): any[] {
    if (!users) return [];
    if (!searchText) return users;
    searchText = searchText.toLowerCase();
    return users.filter(user => {
      return user.name.toLowerCase().includes(searchText);
    });
  }
}
