<template>
    <div class="content">
        <div class="planet">
            <div class="ring"></div>
            <div class="cover-ring"></div>
            <div class="spots">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
$m-01: #3c4359;
$m-02: #546c8c;
$m-03: #7ea1bf;
$m-04: #bacbd9;
$m-05: #bf80a9;

.content {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 300px;
    height: 300px;
    margin: 0 auto;

    .planet {
        position: absolute;
        display: flex;
        align-items: center;
        width: 65%;
        height: 65%;
        transform-origin: center center;
        animation: planet 5s ease infinite alternate;
        border-radius: 100%;
        background-color: $m-02;
        box-shadow: inset 2px -10px 0px rgba(0, 0, 0, 0.1);

        @keyframes planet {
            0% {
                transform: rotate(10deg);
            }

            100% {
                transform: rotate(-10deg);
            }
        }

        /* planet ring */
        .ring {
            position: absolute;
            display: flex;
            align-items: center;
            justify-content: center;
            width: 300px;
            height: 300px;
            transform-origin: 33% center;
            animation: ring 3s ease infinite;
            border-radius: 100%;
            background-color: $m-04;
            box-shadow: 2px -10px 0px rgba(0, 0, 0, 0.1),
                inset -5px -10px 0px rgba(0, 0, 0, 0.1);

            @keyframes ring {
                0% {
                    transform: rotateX(110deg) rotateZ(0deg)
                        translate(-50px, 5px);
                }

                100% {
                    transform: rotateX(110deg) rotateZ(360deg)
                        translate(-50px, 5px);
                }
            }

            /* small ball */
            &:before {
                position: absolute;
                z-index: 2;
                left: calc(0px - 5px);
                width: 10px;
                height: 30px;
                content: '';
                border-radius: 100%;
                background-color: $m-03;
                box-shadow: inset -3px 3px 0px rgba(0, 0, 0, 0.2);
            }

            /* inner ring */
            &:after {
                position: absolute;
                width: 240px;
                height: 240px;
                content: '';
                border-radius: 100%;
                background-color: $m-03;
                box-shadow: inset 2px -10px 0px rgba(0, 0, 0, 0.1);
            }
        }

        /* to cover the back of the ring */
        .cover-ring {
            position: absolute;
            z-index: 2;
            width: 100%;
            height: 50%;
            transform: translate(0px, -17px);
            border-radius: 100px 100px 80% 80%;
            background-color: $m-02;
            box-shadow: inset 0px -2px 0px rgba(0, 0, 0, 0.1);
        }

        /* planet spots */
        .spots {
            position: absolute;
            z-index: 2;
            display: flex;
            align-items: center;
            justify-content: center;
            width: 100%;
            height: 100%;

            span {
                position: absolute;
                width: 30px;
                height: 30px;
                animation: dots 5s ease infinite alternate;
                border-radius: 100%;
                background-color: $m-01;
                box-shadow: inset -2px 3px 0px rgba(0, 0, 0, 0.3);

                @keyframes dots {
                    0% {
                        box-shadow: inset -3px 3px 0px rgba(0, 0, 0, 0.3);
                    }
                    100% {
                        box-shadow: inset 3px 3px 0 rgba(0, 0, 0, 0.3);
                    }
                }

                &:nth-child(1) {
                    top: 20px;
                    right: 50px;
                }

                &:nth-child(2) {
                    top: 40px;
                    left: 50px;
                    width: 15px;
                    height: 15px;
                }

                &:nth-child(3) {
                    top: 80px;
                    left: 20px;
                    width: 25px;
                    height: 25px;
                }

                &:nth-child(4) {
                    top: 80px;
                    left: 90px;
                    width: 40px;
                    height: 40px;
                }

                &:nth-child(5) {
                    top: 160px;
                    left: 70px;
                    width: 15px;
                    height: 15px;
                }

                &:nth-child(6) {
                    top: 165px;
                    left: 125px;
                    width: 10px;
                    height: 10px;
                }

                &:nth-child(7) {
                    top: 90px;
                    left: 150px;
                    width: 15px;
                    height: 15px;
                }
            }
        }
    }
}
</style>
