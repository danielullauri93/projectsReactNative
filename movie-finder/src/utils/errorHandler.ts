export const handleApiError = (error: any) => {
  if (error.response) {
    return 'Error en la respuesta del servidor';
  } else if (error.request) {
    return 'No se pudo conectar al servidor';
  } else {
    return 'Error desconocido';
  }
};