import Stake from "./abi/stake.json";
import contractAddress from "./abi/contractAddress.json";
// import { formattedError } from "./FormattedError";
import { useReadContract, useWriteContract } from "wagmi";
// import { useContractRead } from "wagmi";

// const ViewFarmerInfo = async (_farmer) => {
//   console.log(_farmer);
//   try {
//     const instance = await contractStakeFacetInstance();
//     const result = await instance.farmerInformation(_farmer);
//     console.log(result, "result, result,result,result,result");
//     return {
//       message: result,
//       status: true,
//     };
//   } catch (error) {
//     return {
//       message: formattedError(error).message,
//       status: formattedError(error).status,
//     };
//   }
// };
const contractConfig = {
  address: contractAddress.address, // Replace with your contract address
  abi: Stake.abi,
};

export const useFetchFarmerInfo = (_farmer) => {
  const { data, error, isPending } = useReadContract({
    ...contractConfig,
    functionName: "farmerInformation",
    args: [_farmer],
  });

  return { data, error, isPending };
};

export const useFarm = (_farmingPeriod, _investment) => {
  const { data, error, isLoading, isSuccess, write } = useWriteContract({
    ...contractConfig,
    functionName: "farm",
    args: [_farmingPeriod],
    overrides: {
      value: _investment,
    },
  });

  console.log("useFarm hook:", { data, error, isLoading, isSuccess, write });

  return { data, error, isLoading, isSuccess, write };
};
