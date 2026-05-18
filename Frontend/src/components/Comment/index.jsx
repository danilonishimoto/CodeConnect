import styles from './comment.module.css'
import { Avatar } from "../Avatar"
import { ModalComment } from '../ModalComment'
import { useAuth } from '../../hooks/useAuth'

export const Comment = ({ comment }) => {

    const { user } = useAuth()

    const isOwner = user && (user.id === comment.author.id)

    return (<div className={styles.comment}>
        <Avatar author={comment.author} />
        <strong>@{comment.author.name}</strong>
        <p>{comment.text}</p>
        <div className={styles.divider} />
        {isOwner && <ModalComment isEditing={true} />}
    </div>)
}