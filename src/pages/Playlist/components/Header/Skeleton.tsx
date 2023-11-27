import { Flex } from '@/assets/style';
import { SkeletonDescription, SkeletonImage, SkeletonTitle } from './Header.style';

const Skeleton = () => {
  return (
    <Flex alignItems="center" gap="24px">
      <SkeletonImage />
      <Flex column gap="10px">
        <SkeletonTitle />
        <SkeletonDescription />
      </Flex>
    </Flex>
  );
};

export default Skeleton;
