const Page = ({
  params,
}: {
  params: { id: string; userId: string; categoryId: string };
}) => {
  console.log(params);
  return (
    <>
      <div className="m-4 font-bold">Blog ID: {params.id} </div>
      <div className="m-4 font-bold">Blog UserID: {params.userId} </div>
      <div className="m-4 font-bold">Blog categoryID: {params.categoryId} </div>
    </>
  );
};

export default Page;
