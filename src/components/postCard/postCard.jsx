import styles from "./postCard.module.css";
import Image from "next/image";
import Link from "next/link";

const PostCard = ({ post }) => {
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <div className={styles.imgContainer}>
          <Image
            src={
              post.img ??
              "https://images.pexels.com/photos/15986547/pexels-photo-15986547/free-photo-of-a-townscape-on-hills.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
            }
            fill
            alt="Nature"
            className={styles.img}
          />
        </div>

      </div>
      <div className={styles.bottom}>
        <h1 className={styles.title}>{post.title}</h1>
        <span className={styles.date}>
          {post.createdAt?.toString().slice(4, 16) ??
            new Date().toString().slice(4, 16)}
        </span>
        <p className={styles.desc}>{post.body}</p>
        <Link className={styles.link} href={`/blog/${post.id}`}>
          Read MORE
        </Link>
      </div>
    </div>
  );
};

export default PostCard;
