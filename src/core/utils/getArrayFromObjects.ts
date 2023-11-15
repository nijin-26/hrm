export const getArrayFromObjects = (data: any) => {
  console.log(data);
  return Object.keys(data).map((key) => ({
    id: key,
    ...(data as any)[key],
  }));
};
