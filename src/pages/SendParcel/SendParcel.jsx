import React from 'react'
import { useForm } from 'react-hook-form'

const SendParcel = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const handleSendParcel = data => {
    console.log(data)
  }
  return (
    <div>
      <h2 className="text-5xl font-bold">Send A Parcel</h2>

      <form onSubmit={handleSubmit(handleSendParcel)} className='mt-12 p-4 text-black'>
        {/* document */}
        <div>
          <label className="label mr-4">
            <input type="radio" {...register('parcelType')} value="document" className='radio' defaultChecked />Document
          </label>

          <label className="label">
            <input type="radio" {...register('parcelType')} value="non-document" className='radio' />Non-Document
          </label>
        </div>

        {/* parcel info: name velu */}
        <div className='grid grid-cols-1 md:grid-cols-2 gap-12 my-8'>
          <fieldset className="fieldset">
            <label className="label">Parcel Name</label>
            <input type="text" {...register('parcelName')} className="input w-full" placeholder="Parcel Name" />
          </fieldset>
          <fieldset className="fieldset">
            <label className="label">Parcel Weight (kg)</label>
            <input type="number" {...register('parcelWeight')} className="input w-full" placeholder="Parcel Weight" />
          </fieldset>
        </div>

        {/* tow colum */}
        <div>
          {/* sender */}
          <h4 className="text-2xl font-semibold">Sender Deteils</h4>
          <fieldset className="fieldset">
            <label className="label">Parcel Name</label>
            <input type="text" {...register('parcelName')} className="input w-full" placeholder="Parcel Name" />
          </fieldset>

          {/* Receiver Details */}
          <div>

          </div>

        </div>
        <input type="submit" className='btn btn-primary text-black' value="Send Parcrl" />
      </form>
    </div>
  )
}

export default SendParcel