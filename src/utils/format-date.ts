/**
 * Formats a Date object, a string, or a number representing a date as a string in the format "dd MMM, yyyy".
 * @param date A Date object, string, or number representing a date.
 * @returns A formatted string representing the date in the format "dd MMM, yyyy".
 */
export function formatDate(date: Date | string | number | undefined): string {
  // If the date is undefined, return "N/A".
  if (!date) return "N/A";

  // If the date is a number or a string, convert it to a Date object.
  if (typeof date === "number" || typeof date === "string") {
    date = new Date(date);
  }

  // Extract the year, month, and day from the Date object.
  // const year = date.getFullYear();
  const month = date.toLocaleString("default", { month: "short" });
  const day = date.getDate();

  // Return the formatted date string in the format "dd MMM, yyyy".
  return `${day} ${month}`;
}
