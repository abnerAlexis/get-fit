import React, { useState } from 'react'
import SectionWrapper from './SectionWrapper'
import { SCHEMES, WORKOUTS } from '../utils/beast';
import Button from './Button';

function Header(props) {
    const { index, title, description } = props;

    return (
        <div className='flex flex-col gap-4'>
            <div className='flex items-center justify-center gap-3'>
                <p className='text-3xl sm:text-4xl md:text-5xl font-semibold text-slate-400'>{index}</p>
                <h4 className='text-xl sm:text-2xl md:text-3xl'>{title}</h4>
            </div>
            <p className='text-sm sm:text-base mx-auto'>{description}</p>
        </div>
    )
}

const Generator = (props) => {
    const {beastMode, setBeastMode, muscles, setMuscles, goal, setGoal, updateWorkout} = props;
    const [showModal, setShowModal] = useState(false);

    const toggleModal = () => {
        setShowModal(!showModal);
    }

    const updateMuscles = (muscleGroup) => {
        if (muscles.includes(muscleGroup)) {
            setMuscles(muscles.filter(val => val !== muscleGroup))
            return
        }

        if (muscles.length > 2) {
            return
        }

        if (beastMode !== 'individual') {
            setMuscles([muscleGroup])
            setShowModal(false)
            return
        }

        setMuscles([...muscles, muscleGroup])
        if (muscles.length === 2) {
            setShowModal(false)
        }
    }

    return (
        <SectionWrapper
            id={'generate'}
            header="Generate your workout."
            title={["Time", "for", "BEAST", "MODE"]}
        >
            <Header
                index={'01'}
                title={'Pick your beast mode!'}
                description={'Select a workout'}
            />
            <div className='grid grid-cols-2 sm:grid-cols4 gap-4'>
                {Object.keys(WORKOUTS).map((type, typeIndex) => {
                    return (
                        <button onClick={() => {
                            setMuscles([])
                            setBeastMode(type);
                        }}
                            className={'bg-slate-950 border border-blue-400 duration-200 px-4 hover:border-blue-600 py-4 rounded-lg'
                                + (type === beastMode ? 'border-blue-600' : 'border-blue-400')
                            }
                            key={typeIndex}
                        >
                            <p className='capitalize'>{type.replaceAll('_', ' ')}</p>
                        </button>
                    )
                })}
                {/* console.log("Mode", {beastMode}) */}
            </div>
            <Header
                index={'02'}
                title={'Set your sight on success!'}
                description={'Select the muscle group to grind'}
            />
            <div className='bg-slate-950 border border-solid border-blue-400 rounded-lg flex flex-col'>
                <button onClick={toggleModal} className='relative p-3 flex items-center justify-center'>
                    <p className='capitalize'>{muscles.length == 0 ? "Select the muscle groups" : muscles.join(" ")}</p>
                    <i className="fa-solid absolute right-3 top-1/2 -translate-y-1/2  fa-caret-down"></i>
                </button>
                {showModal && (
                    <div className='flex flex-col px-3 pb-3'>
                        {(beastMode === 'individual' ? WORKOUTS[beastMode] : Object.keys(WORKOUTS[beastMode])).map((muscleGroup, muscleGroupIndex) => {
                            return (
                                <button onClick={() => {
                                    updateMuscles(muscleGroup)
                                }} key={muscleGroupIndex} className={'hover:text-blue-400 duration-200' 
                                + (muscles.includes(muscleGroup) ? ' text-blue-400' : ' ')}>
                                    <p className='uppercase'>{muscleGroup.replaceAll('_', ' ')}</p>
                                </button>
                            )
                        })}
                    </div>
                )}
            </div>
            <Header
                index={'03'}
                title={'Become a Beast!'}
                description={'Select your ultimate objective.'}
            />
            <div className='grid grid-cols-1 sm:grid-cols-3 gap-4'>

                {Object.keys(SCHEMES).map((scheme, schemeIndex) => {
                    return (
                        <button onClick={() => {
                            setGoal(scheme);
                        }}
                            className={'bg-slate-950 border border-blue-400 duration-200 hover:border-blue-600 py-4 rounded-lg px-4'
                                + (scheme === goal ? 'border-blue-600' : 'border-blue=400')
                            }
                            key={schemeIndex}
                        >
                            <p className='capitalize'>{scheme.replaceAll('_', ' ')}</p>
                        </button>
                    )
                })}
            </div>
            <Button func={updateWorkout} text={"Formulate"}></Button>
        </SectionWrapper>
    )
}

export default Generator