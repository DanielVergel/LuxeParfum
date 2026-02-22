import { Skeleton } from "./ui/skeleton";

type SkeletonSchemaProps = {
    grid: number
}

const SkeletonScent = (props: SkeletonSchemaProps ) => {

    const { grid } = props;

    return ( 
        Array.from({ length:grid }).map((_, index) => (
            <div key={index} className="flex flex-col px-2 gap-8 mx-auto space-y-3">
                <Skeleton className=" h-[210px] w-[430px] rounder-xl"/>

            </div>
        )
     ));
}
 
export default SkeletonScent;