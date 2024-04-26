export const userEmail = localStorage.getItem("username".toString());
export const userName = localStorage.getItem("fullName")?.toString();

// Event Time 
export const eventDate:any = new Date("April 26, 2024 00:00:00").getTime();