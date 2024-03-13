"use client";

import Image from "next/image";

import { Button } from "@/components/ui/button";
import { useProModal } from "@/hooks/use-pro-modal";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { useAction } from "@/hooks/use-action";
import { stripeRedirect } from "@/actions/stripe-redirect";
import { toast } from "sonner";

export const ProModal = () => {
  const proModal = useProModal();

  const { execute, isLoading } = useAction(stripeRedirect, {
    onSuccess: (data) => {
      window.location.href = data;
    },
    onError: (error) => {
      toast.error(error);
    },
  });

  const onClick = () => {
    execute({});
  };

  return (
    <Dialog open={proModal.isOpen} onOpenChange={proModal.onClose}>
      <DialogContent className="max-w-md p-0 overflow-hidden">
        <div className="aspect-video relative flex items-center justify-center">
          <Image src="/hero.svg" alt="Hero" className="object-cover" fill />
        </div>
        <div className="text-neutral-700 mx-auto space-y-6 p-6">
          <h2 className="font-semibold text-xl">
            요이스터 프로로 업그레이드 해보세요!
          </h2>
          <p className="text-xs font-semibold text-neutral-600">
            진정한 싱글 랜딩페이지를 경험할 수 있습니다.
          </p>
          <div className="pl-3">
            <ul className="text-sm list-disc">
              <li>패이지도 무제한 s</li>
              <li>외부 연결도 무제한</li>
              <li>원하는 모든 정보를 캐비넷에 무제한으로</li>
              <li>그리고 또...!</li>
            </ul>
          </div>
          <Button
            disabled={isLoading}
            onClick={onClick}
            className="w-full"
            variant="primary"
          >
            업그레이드하기
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};
