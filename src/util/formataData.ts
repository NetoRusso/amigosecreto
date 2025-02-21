
interface FormDataProps {
  day: number | undefined;
  month: number | undefined;
  year: number | undefined;
};
export const formatDate = ({day, month, year}:  FormDataProps): string => {

  if (!day || !month || !year) {
    return "";
  }

  const meses = [
    "janeiro", "fevereiro", "março", "abril", "maio", "junho",
    "julho", "agosto", "setembro", "outubro", "novembro", "dezembro"
  ];

  const dia = day;
  const mes = meses[month];
  const ano = year;

  return `${dia} de ${mes} de ${ano}`;
};