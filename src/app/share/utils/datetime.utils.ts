import * as moment from 'moment';

export class DateTimeService {
  public static getFullWeeksForMonth(month: Date | moment.Moment) {
    const weeks = [];
    let w = 1;
    for (
      let i = moment(month).startOf('month');
      i <= moment(month).endOf('month').endOf('week');
      i = i.add(1, 'week')
    ) {
      const date = i.toDate();
      const week = {
        Id: date,
        StartDate: moment(date).startOf('week').toDate(),
        EndDate: moment(date).endOf('week').toDate(),
        WeekNumber: w,
      };
      weeks.push(week);
      w++;
    }
    return weeks;
  }
}
