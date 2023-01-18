// Write a function, which takes a non-negative integer (seconds) as input and returns the time in a human-readable format (HH:MM:SS)

// HH = hours, padded to 2 digits, range: 00 - 99
// MM = minutes, padded to 2 digits, range: 00 - 59
// SS = seconds, padded to 2 digits, range: 00 - 59
// The maximum time never exceeds 359999 (99:59:59)

// You can find some examples in the test fixtures.

export function humanReadable(seconds: number): string {
  const realSeconds = seconds % 60;
  const minutes = ((seconds - realSeconds) / 60) % 60;
  const hours = (seconds - minutes * 60 - realSeconds) / 3600;
  let realSecondsStr: string = "";
  let minutesStr: string = "";
  let hoursStr: string = "";
  realSeconds < 10
    ? (realSecondsStr = "0" + realSeconds.toString())
    : (realSecondsStr = realSeconds.toString());
  minutes < 10
    ? (minutesStr = "0" + minutes.toString())
    : (minutesStr = minutes.toString());
  hours < 10
    ? (hoursStr = "0" + hours.toString())
    : (hoursStr = hours.toString());
  return `${hoursStr}:${minutesStr}:${realSecondsStr}`;
}
