// import { checkSubscription } from "@/lib/subscription"
// import { Separator } from "@/components/ui/separator";

// import { SubscriptionButton } from "./_components/subscription-button";

// import { Info } from "../_components/info";

// const BillingPage = async () => {
//   const isPro = await checkSubscription();

//   return (
//     <div className="w-full">
//       <Info isPro={isPro} />
//       <Separator className="my-2" />
//       <SubscriptionButton
//         isPro={isPro}
//       />
//     </div>
//   );
// };

// export default BillingPage;
import { checkSubscription } from "@/lib/subscription";
import { Separator } from "@/components/ui/separator";
import { SubscriptionButton } from "./_components/subscription-button";
import { Info } from "../_components/info";

const BillingPage = async () => {
  let isPro = false;

  try {
    isPro = await checkSubscription();
  } catch (error) {
    console.error("BillingPage → checkSubscription error:", error);
  }

  return (
    <div className="w-full">
      <Info isPro={isPro} />
      <Separator className="my-2" />
      <SubscriptionButton isPro={isPro} />
    </div>
  );
};

export default BillingPage;
