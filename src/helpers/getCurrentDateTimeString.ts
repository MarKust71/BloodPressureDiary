export const getCurrentDateTimeString = () => {
    const locale = 'de-DE';
    const DateTimeOptions = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    const currentTimeStamp = new Date(Date.now());
    return `${currentTimeStamp.toLocaleDateString(locale, DateTimeOptions)} ${currentTimeStamp.toLocaleTimeString(
        locale,
        DateTimeOptions,
    )}`;
};
