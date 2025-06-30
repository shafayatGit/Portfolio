export const fadeInUp = {
    hidden: {
        opacity: 0,
        y: 80
    },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.6,
            ease: 'easeOut'
        },
    },
};

export const fadeIn = {
    hidden: {
        opacity: 0
    },
    visible: {
        opacity: 1,
        transition: {
            duration: 0.6,
            ease: 'easeInOut'
        },
    },
};
export const fadeInLeft = {
    hidden: {
        opacity: 0,
        x: -15
    },
    visible: {
        opacity: 1,
        x: 0,
        transition: {
            duration: 1,
            ease: 'easeOut'
        },
    },
};

export const fadeInRight = {
    hidden: {
        opacity: 0,
        x: 15
    },
    visible: {
        opacity: 1,
        x: 0,
        transition: {
            duration: 1,
            ease: 'easeOut'
        },
    },
};