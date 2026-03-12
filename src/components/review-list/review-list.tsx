import { useAppSelector } from '@/hooks';
import Review from '../review/review';
import ReviewsForm from '../reviews-form/reviews-form';
import { api } from '@/store';
import { UserComment } from '@/types/offer';
import { ReviewFormData } from '@/types/review';
import { useCallback, useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import { getAuthorizationStatus } from '@/store/user/user.selectors';
import { AuthorizationStatus } from '@/const';

type ReviewListProps = {
  offerId: string;
}

const MaxComments = 10;

function ReviewList({ offerId }: ReviewListProps): JSX.Element {
  const [comments, setComments] = useState<UserComment[]>([]);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const userAuthorizedStatus = useAppSelector(getAuthorizationStatus);

  const sendFormData = useCallback(async ({ comment, rating }: ReviewFormData) => {
    try {
      await api.post(`/comments/${offerId}`, { comment, rating });

      setIsSubmitted(true);
    } catch (error) {
      toast.error('Failed to submit review. Please try again later.');
      setIsSubmitted(false);
    }
  }, [offerId]);

  useEffect(() => {
    const fetchCommentsData = async () => {
      try {
        const commentsResponse = await api.get<UserComment[]>(`/comments/${offerId}`);
        setComments(commentsResponse.data);
        setIsSubmitted(false);
      } catch (error) {
        toast.error('Failed to load comments. Please try again later.');
      }
    };

    if (offerId) {
      fetchCommentsData();
    }
  }, [offerId, isSubmitted]);

  return (
    <section className="offer__reviews reviews">
      <h2 className="reviews__title">Reviews &middot; <span className="reviews__amount">{comments.length}</span></h2>
      <ul className="reviews__list">
        {comments.slice(-MaxComments).map((comment) => (
          <Review
            key={comment.id}
            comment={comment}
          />
        ))}
      </ul>
      {(userAuthorizedStatus === AuthorizationStatus.Auth) && (
        <ReviewsForm
          sendFormData={sendFormData}
        />
      )}

    </section>
  );
}

export default ReviewList;
