import React from 'react'
import styles from "./Loading.module.css"
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';
import clsx from "clsx"

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            display: 'flex',
            '& > * + *': {
                marginLeft: theme.spacing(2),
            },
        },
    }),
);

function Loading() {
    const classes = useStyles()
    return (
        <div className={styles.container}>
            <div className={clsx(styles.loadingBar, classes.root)}>
                <CircularProgress />
            </div>
        </div>
    )
}

export default Loading
