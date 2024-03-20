export const dateToStr = date => {
    const dd = date.getDate().toString().padStart(2, '0');
    const mm = (1 + date.getMonth()).toString().padStart(2, '0');
    const yyyy = date.getFullYear();
    return dd + '/' + mm + '/' + yyyy;
};