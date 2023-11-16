import { ref, type Ref } from 'vue'
import { defineStore } from 'pinia'
import { tours as mockTours } from '@/data/tours'
import axios from 'axios';
import { useRouter } from 'vue-router';

class Reservation {
  firstname = '';
  lastname = '';
  tour_id = -1;
  guide_id = -1;
  date = '';
  phone = '';
  persons_count = '';
  details = '';
}

interface Tour {
  id: number,
  name: string,
  description: string,
  duration: string,
  difficulty: string,
  images: Array<{src: string}> 
}

interface Guide {
  id: number,
  firstname: string,
  lastname: string,
  phone: string,
  about: string,
}

export const useReservationStore = defineStore('reservation', () => {
  const tours: Ref<Tour[]> = ref([])
  const guides: Ref<Guide[]> = ref([])
  const reservation = ref(new Reservation())
  const snackbar = ref({ visible: false, status: 'success', message: '' })

  const router = useRouter();

  const fetchTours = () => {
    tours.value = mockTours;
    reservation.value.tour_id = tours.value[0].id
  }

  const fetchGuides = () => {
    return axios.get('http://localhost:3000/api/v1/guides')
      .then(({ data }) => {
        guides.value = data
        if (data.length) {
          reservation.value.guide_id = data[0].id
        }
      })
    
  }
  
  const updateReservation = <T extends keyof Reservation>({ field, value }: { field: T, value: typeof reservation.value[T] }) => {
    reservation.value[field] = value;
  }

  const submitReservation = async () => {
    await axios.post('http://localhost:3000/api/v1/reserve', { ...reservation.value })
      .then(() => {
        router.push('/')
        snackbar.value = { visible: true, status: 'success', message: 'Reservation created.' }
      })
  }

  return { reservation, tours, guides, snackbar, fetchTours, fetchGuides, updateReservation, submitReservation }
})
