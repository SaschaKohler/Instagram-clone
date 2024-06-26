import AntDesign from 'react-native-vector-icons/AntDesign';
import styles from './styles';
import colors from '../../theme/colors';
import {IComment} from '../../types/models';
import {View, Image, Text, Pressable} from 'react-native';
import {useState} from 'react';
import {Comment as CommentType} from '../../API';
import {DEFAULT_USER_IMAGE} from '../../config';

interface ICommentProps {
  comment: CommentType;
  includeDetails: boolean;
}
const Comment = ({comment, includeDetails = false}: ICommentProps) => {
  const [isLiked, setIsLiked] = useState(false);

  const toggleLike = () => {
    setIsLiked(v => !v);
  };
  return (
    <View style={styles.comment}>
      {includeDetails && (
        <Image
          source={{uri: comment.User?.image || DEFAULT_USER_IMAGE}}
          style={styles.avatar}
        />
      )}
      <View style={styles.middleColumn}>
        <Text style={styles.commentText}>
          <Text style={styles.bold}>{comment.User?.username} </Text>
          {comment.comment}
        </Text>
        {includeDetails && (
          <View style={styles.footer}>
            <Text style={styles.footerText}>3d</Text>
            <Text style={styles.footerText}>5 Likes</Text>
            <Text style={styles.footerText}>Reply</Text>
          </View>
        )}
      </View>
      <Pressable onPress={toggleLike} hitSlop={5}>
        <AntDesign
          name={isLiked ? 'heart' : 'hearto'}
          size={14}
          style={styles.icon}
          color={isLiked ? colors.accent : colors.black}
        />
      </Pressable>
    </View>
  );
};

export default Comment;
