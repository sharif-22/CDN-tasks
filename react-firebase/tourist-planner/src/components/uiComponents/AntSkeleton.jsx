import React from "react";
import { Skeleton } from "antd";

const AntSkeletonText = () => {
  return (
    <>
      <div className="space-y-4 w-[300px] lg:w-[400px] h-48">
        <Skeleton
          paragraph={{
            rows: 5,
          }}
          active={true}
        />
      </div>
      <div className="space-y-4 w-[300px] lg:w-[400px] h-48">
        <Skeleton
          paragraph={{
            rows: 5,
          }}
          active={true}
        />
      </div>
      <div className="space-y-4 w-[300px] lg:w-[400px] h-48">
        <Skeleton
          paragraph={{
            rows: 5,
          }}
          active={true}
        />
      </div>
    </>
  );
};

const AntSkeletonBtn = () => {
  return <Skeleton.Button shape="square" active={true} />;
};

export { AntSkeletonText, AntSkeletonBtn };
