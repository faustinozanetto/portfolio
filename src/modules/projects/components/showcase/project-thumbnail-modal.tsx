import { Dialog, Transition } from '@headlessui/react';
import Image from '@modules/ui/components/images/image';
import React, { Fragment } from 'react';

interface IProjectThumbnailModalProps {
  thumbnail: string;
  onClose: () => void;
}

const ProjectThumbnailModal: React.FC<IProjectThumbnailModalProps> = (props) => {
  const { thumbnail, onClose } = props;

  return (
    <Transition appear show={thumbnail !== ''} as={Fragment}>
      <Dialog as="div" className="relative z-10" onClose={onClose}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black/25" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel className="max-w-2xl overflow-hidden rounded-2xl bg-neutral-200 p-2 text-left align-middle shadow-xl transition-all dark:bg-neutral-800 md:max-w-3xl md:p-4">
                {thumbnail && (
                  <Image
                    src={thumbnail}
                    alt="Project thumbnail"
                    className="w-full rounded-xl"
                    width={800}
                    height={800}
                    priority
                  />
                )}
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
};

export default ProjectThumbnailModal;
