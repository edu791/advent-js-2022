function countHours(year, holidays) {
    var extraHours = 0;
    for (const holiday of holidays) {
      const hDate = new Date();
      const month = parseInt(holiday.split('/')[0]) - 1;
      const date = parseInt(holiday.split('/')[1]);
      hDate.setYear(year);
      hDate.setMonth(month);
      hDate.setDate(date);
  
      if (hDate.getDay() !== 6 && hDate.getDay() !== 0) {
        extraHours = extraHours + 2;
      }
    }
    return extraHours;
  }
  