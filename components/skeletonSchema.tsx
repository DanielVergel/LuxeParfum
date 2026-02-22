import { Skeleton } from "./ui/skeleton";

type SkeletonSchemaProps = {
    grid: number
}

const SkeletonSchema = (props: SkeletonSchemaProps ) => {

    const { grid } = props;

    return ( 
        Array.from({ length:grid }).map((_, index) => (
            <div key={index} className="flex flex-col px-10 gap-8 mx-auto space-y-3">
                <Skeleton className=" h-[280px] sm:h-[320px] md:h-[360px] lg:h-[400px]

                w-[350px] rounder-xl"/>

                <div className=" space-y-2 ">
                    <Skeleton className="h-4 w-[350px] "/>
                    <Skeleton className="h-4 w-[350px] "/>
                   
                </div>
            </div>
        )
     ));
}
 
export default SkeletonSchema;