import type { LinkButtonProps } from '@modules/ui/components/buttons/button-link';
import LinkButton from '@modules/ui/components/buttons/button-link';
import React from 'react';
import { FiGithub } from 'react-icons/fi';

type IRepoButtonProps = LinkButtonProps & {
  href: string;
  children?: React.ReactNode;
};

const RepoButton: React.FC<IRepoButtonProps> = (props) => {
  const { href, children, ...rest } = props;

  return (
    <LinkButton
      colorScheme="orange"
      href={href}
      leftIcon={<FiGithub size={22} />}
      target="_blank"
      aria-label="Repo Button"
      {...rest}
    >
      {children}
    </LinkButton>
  );
};

export default RepoButton;
