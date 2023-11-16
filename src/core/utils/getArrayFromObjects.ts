export const getArrayFromObjects = (data: any) => {
  return Object.keys(data).map((key) => ({
    id: key,
    ...(data as any)[key],
  }));
};
