const dayName = (dateString,allDays = 0) => {
    const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const date = new Date(dateString);
    const dayIndex = (date.getDay() + allDays) % 6; // Получаем индекс дня недели (0 - Sunday, 1 - Monday, и так далее)
    return daysOfWeek[dayIndex];
  };
  
  export default dayName;
  